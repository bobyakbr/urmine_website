import Link from 'next/link'

export default function CareersSection() {
  return (
    <section id="about" className="bg-black py-16 lg:py-24">
        <div className="container mx-auto px-6  py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Our Team</h2>
        <div className="flex justify-center gap-8  max-w-5xl mx-auto md:grid md:grid-cols-2">
          <div className="bg-[url('/pic1.webp')] bg-auto bg-cover rounded-lg">
          <div className="bg-black bg-opacity-70 bg-auto bg-cover p-6 rounded-lg h-full   ">
          
          <p className="text-gray-100 text-xl">Our team has over 20 years of experience delivering high-quality server based solutions for small businesses to large enterprises worldwide. We offer the latest technologies available to provide reliable data scaling and results in a fast-paced environment</p>
          </div>
          </div>
          
          <div className="bg-[url('/pic10.webp')] bg-auto bg-cover rounded-lg">
          <div className="bg-black bg-opacity-70 bg-auto bg-cover p-6 rounded-lg h-full ">
          
          <p className="text-gray-100 text-xl">
          Our support division is dedicated to providing exceptional customer service and technical assistance to clients, ensuring seamless integration and optimal performance of all technology solutions. This division is staffed with highly skilled professionals who are experts in troubleshooting, system maintenance, and user support. 
          </p></div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 text-center py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
          Join Our Team
        </h2>
        <p className="text-lg text-gray-100 mb-8">
          At URMINE, we are constantly looking for talented individuals to join our growing team.
          Together, we can drive innovation, solve complex challenges, and create a better future.
        </p>
        <Link href="/careers" className="inline-block bg-red-800 text-white text-lg font-medium py-3 px-8 rounded-full shadow-lg hover:bg-red-600 transition duration-300">

            Explore Careers
 
        </Link>
      </div>
    </section>
  )
}