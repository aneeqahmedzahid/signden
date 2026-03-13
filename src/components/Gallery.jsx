import { useState, useCallback } from 'react'
import './Gallery.css'

const galleryImages = [
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/3d_aluminum_signage_dubai_01.jpg?fit=900%2C700&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/3d_aluminum_signage_dubai_01.jpg?fit=500%2C400&ssl=1", alt: "3d aluminum signage dubai", w: 900, h: 700 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/Dinner-In-the-Sky.webp?fit=1024%2C576&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/Dinner-In-the-Sky.webp?fit=500%2C400&ssl=1", alt: "Dinner In the Sky", w: 1024, h: 576 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/31.webp?fit=850%2C500&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/31.webp?fit=500%2C400&ssl=1", alt: "Signage project 31", w: 850, h: 500 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-9.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-9.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-4.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-4.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-5.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-5.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-6.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-6.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-7.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-7.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-8.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-8.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-3.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-3.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-23.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-23.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-22.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-22.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-2.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-2.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-1.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.06.28-PM-1.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-24.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-24.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-19.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-19.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-20.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-20.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-21.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-21.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-18.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-18.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-17.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-17.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-13.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-13.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-12.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-12.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-11.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-11.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-10.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-10.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-9.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-9.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-14.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-14.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-15.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-15.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-16.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-16.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-8.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-8.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-7.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-7.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-6.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-6.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-4.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-4.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-3.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-3.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-2.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-2.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-1.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.49-PM-1.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-16.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-16.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-17.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-17.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.48-PM.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.48-PM.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.48-PM-1.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-3.05.48-PM-1.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-14.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-14.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-9.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-9.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-4.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-4.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-5.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-5.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-10.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-10.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-11.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-11.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-6.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-6.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-7.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-7.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-12.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-12.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-13.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-13.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-8.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-8.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-3.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-3.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-2.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-2.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-7.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-7.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-6.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-6.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-5.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-5.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-1.jpeg?fit=1280%2C960&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.05-PM-1.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 1280, h: 960 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-8.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-8.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-3.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-3.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-4.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-4.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-2.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-2.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
  { href: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-1.jpeg?fit=960%2C1280&ssl=1", src: "https://i0.wp.com/signden.ae/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-2.54.04-PM-1.jpeg?fit=500%2C400&ssl=1", alt: "Signage project", w: 960, h: 1280 },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = useCallback((e, index) => {
    e.preventDefault()
    setLightbox(index)
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const prev = useCallback(() => {
    setLightbox(i => (i - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  const next = useCallback(() => {
    setLightbox(i => (i + 1) % galleryImages.length)
  }, [])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') prev()
    else if (e.key === 'ArrowRight') next()
    else if (e.key === 'Escape') closeLightbox()
  }, [prev, next, closeLightbox])

  return (
    <section className="gallery-section" id="gallery" onKeyDown={handleKeyDown} tabIndex={-1}>
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="gallery-tag">Our Work</span>
          <h2 className="gallery-title">Project Gallery</h2>
          <p className="gallery-subtitle">
            Explore our portfolio of premium signage installations across the UAE
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div className="gallery-item" key={index}>
              <a
                href={img.href}
                onClick={(e) => openLightbox(e, index)}
                aria-label={img.alt}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-item-overlay">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightbox].href}
              alt={galleryImages[lightbox].alt}
            />
            <p className="lightbox-counter">{lightbox + 1} / {galleryImages.length}</p>
          </div>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
