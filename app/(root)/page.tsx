import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = {firstName: 'Faith', lastName : 'Famouzcoder', email: 'famouzcoder@gmail.com', userName: 'Famouzcoder'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className="home-header">
          <HeaderBox
          type='greeting'
          title='welcome'
          user ={loggedIn?.firstname || 'Guest'}
          subtext='Access and manage your account and transactions efficiently'
          />

          <TotalBalanceBox
          acounts ={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar
        user= {loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1055.50}, {currentBalance: 1055.50}]}
      />
    </section>
  )
}

export default Home
