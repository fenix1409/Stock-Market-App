"use client"
import FooterLink from '@/components/forms/FooterLink'
import InputField from '@/components/forms/inputField'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useForm } from 'react-hook-form'

const SignIn = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur'
  })

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1 className='form-title'>Login In Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <InputField
          name="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
          validation={{ required: 'Email is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required' }}
        />

        <InputField
          name="password"
          label="Password"
          type='password'
          placeholder="Enter your password"
          register={register}
          error={errors.password}
          validation={{ required: 'Password is required', minLength: 8 }}
        />

        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </Button>

        <FooterLink text='Already have an account?' linkText='Sign in' href='/sign-in' />
      </form>
    </>
  )
}

export default SignIn