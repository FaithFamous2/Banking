import AuthForm from '@/components/AuthForm'

const SignUp = async () => {
  // const loggedInUser = await getLoggedInUser();

  // console.log(loggedInUser)
  return (
    <section className='flex-center size-full max-sn:px-6'>
      <AuthForm type="sign-up" />
    </section>
  )
}

export default SignUp
