'use client'

import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { AnimateOnScroll, StaggerContainer, StaggerItem } from './MotionWrappers'
import { products } from '../data/site-content'

export default function Products() {
  const handleOrder = (productName) => {
    const message = `Halo Kak, saya dapat info dari website DekatLokal Kareppe Crunch. Saya ingin pesan kerupuk singkong varian ${productName}.`
    const whatsappUrl = `https://wa.me/62882019886782?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="products" className="py-16 bg-white" aria-label="Katalog produk Kareppe Crunch">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Varian <span className="text-orange-600">Kareppe Crunch</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
            Pilih rasa favorit Anda dari berbagai varian lezat
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {products.map((product) => (
            <StaggerItem
              key={product.id}
              id={`produk-${product.slug}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ease-out h-full flex flex-col scroll-mt-20"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className={`${
                    product.badge === 'Best Seller' ? 'bg-orange-500' :
                    product.badge === 'Hot' ? 'bg-red-500' :
                    product.badge === 'Premium' ? 'bg-purple-500' :
                    product.badge === 'New' ? 'bg-green-500' :
                    product.badge === 'Limited' ? 'bg-yellow-500' :
                    'bg-pink-500'
                  } text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Product Image - Square */}
              <div className="relative aspect-square overflow-hidden">
                <Image 
                  src={product.image}
                  alt={`Kerupuk singkong Kareppe Crunch varian ${product.name}`}
                  width={400}
                  height={400}
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 md:p-4 flex flex-col flex-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                  {product.description}
                </p>
                <p className="text-base md:text-lg font-bold text-orange-600 mb-3 md:mb-4">
                  {product.price}
                </p>

                {/* Order Now Button */}
                <button 
                  onClick={() => handleOrder(product.name)}
                  aria-label={`Order sekarang varian ${product.name} via WhatsApp`}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 md:py-3 px-3 md:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center mt-auto text-sm md:text-base min-h-[48px]"
                >
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" aria-hidden="true" />
                  Order Sekarang
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
