import { Button } from '../ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

const category = ['Frontend Developer', 'Backend Developer', 'Data Science', 'Graphic Designer', 'FullStack Developer']

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((item, index) => {
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Button variant="outline" className="rounded-full">
                  {item}
                </Button>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CategoryCarousel