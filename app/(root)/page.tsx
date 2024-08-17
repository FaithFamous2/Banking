import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async() => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
      <div className='home-content'>
        <header className="home-header">
          <HeaderBox
          type='greeting'
          title='welcome'
          user ={loggedIn?.name || 'Guest'}
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
