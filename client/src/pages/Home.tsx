import { Navbar, HeroSection, CategoryCarousel, LatestJobs, Footer } from '@/components/organisms'

const Home = () => {
  
  return (
    <div>
      <Navbar />
      {/* hero section here  */}
      <HeroSection />
      {/* Category Carousel here  */}
      <CategoryCarousel />
      {/* Latest Jobs section here  */}
      <LatestJobs />
      {/* Footer Section here  */}
      <Footer />
    </div>
  )
}

export default Home
