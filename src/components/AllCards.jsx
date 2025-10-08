import React from 'react'
import Card from './Card'

const AllCards = ({data}) => {
  const someCard = data.slice(0,8)
  return (
    <>
    <section className="allCards pt-20">
      <h1 className='font-bold text-4xl mb-3'> Trending Apps</h1>
      <p className='text-gray-500 mb-4'>Explore All Trending Apps on the Market developed by us</p>

      <section className="cardsBox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-9 w-11/12">
        {
          someCard.map(card => <Card card={card} key={card.id} />)
        }
      </section>


    </section>
    
    
    </>
  )
}

export default AllCards