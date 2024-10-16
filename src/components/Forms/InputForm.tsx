import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from 'react-router-dom'

import { toast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

const LoginSchema = z.object({
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  password: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères.",
  }),
})

const RegisterSchema = z.object({
  username: z.string().min(2, {
    message: "Le nom d'utilisateur doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  password: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères.",
  }),
  agreeTerms: z.boolean().refine(value => value === true, {
    message: "Vous devez accepter les conditions d'utilisation.",
  }),
})

const TEST_EMAIL = "test@example.com"
const TEST_PASSWORD = "password123"

function AnimatedForm() {
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()
  const loginForm = useForm<z.infer<typeof LoginSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const registerForm = useForm<z.infer<typeof RegisterSchema>>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      agreeTerms: false,
    },
  })

  function onSubmit(data: z.infer<typeof LoginSchema> | z.infer<typeof RegisterSchema>) {
    if (isLogin) {
      if (data.email === TEST_EMAIL && data.password === TEST_PASSWORD) {
        toast({
          title: "Connexion réussie",
          description: "Redirection vers le tableau de bord...",
        })
        setTimeout(() => navigate('/dashboard'), 1500)
      } else {
        toast({
          title: "Erreur de connexion",
          description: "Email ou mot de passe incorrect.",
          variant: "destructive"
        })
      }
    } else {
      toast({
        title: "Inscription réussie",
        description: "Vous pouvez maintenant vous connecter.",
      })
      setIsLogin(true)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-center mb-6">
          <Button
            onClick={() => setIsLogin(true)}
            variant={isLogin ? "default" : "outline"}
            className="mr-2 w-1/2"
          >
            Connexion
          </Button>
          <Button
            onClick={() => setIsLogin(false)}
            variant={!isLogin ? "default" : "outline"}
            className="w-1/2"
          >
            Inscription
          </Button>
        </div>
        <div className={`transition-all duration-300 ease-in-out ${isLogin ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 absolute'}`}>
          <Form {...loginForm}>
            <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@exemple.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full mt-6">Se connecter</Button>
            </form>
          </Form>
        </div>
        <div className={`transition-all duration-300 ease-in-out ${!isLogin ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 absolute'}`}>
          <Form {...registerForm}>
            <form onSubmit={registerForm.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={registerForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom d'utilisateur</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={registerForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@exemple.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={registerForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={registerForm.control}
                name="agreeTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        J'accepte les conditions d'utilisation
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full mt-6">S'inscrire</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default AnimatedForm