export const allProperties = [
  //SALE PROPERTIES
  {
    id: 1,
    image: '/Images/hero_bg_2.jpg',
    title: '625 S. Berendo St',
    location: '625 S. Berendo St Unit 607 Los Angeles, CA 90005',
    price: '$2,265,500',
    type: 'Sale',
    beds: 2,
    baths: 2,
    sqft: 7000,
    isFavorite: false
  },
  {
    id: 2,
    image: '/Images/property_4.jpg',
    title: 'Modern Villa',
    location: '123 Sunset Blvd, Los Angeles, CA 90005',
    price: '$3,500,000',
    type: 'Sale',
    beds: 4,
    baths: 3,
    sqft: 8500,
    isFavorite: false
  },
  {
    id: 3,
    image: '/Images/property_5.jpg',
    title: 'Luxury Apartment',
    location: '456 Park Ave, New York, NY 10001',
    price: '$1,800,000',
    type: 'Sale',
    beds: 3,
    baths: 2,
    sqft: 4200,
    isFavorite: false
  },

  {
    id: 4,
    image: '/Images/hero_bg_1.jpg',
    title: '871 Crenshaw Blvd (Rent)',
    location: '1 New York Ave, Warners Bay, NSW 2282',
    price: '$2,265,500',
    type: 'Rent',
    beds: 2,
    baths: 2,
    sqft: 1620,
    isFavorite: true
  },
  {
    id: 5,
    image: '/Images/property_5.jpg',
    title: '871 Crenshaw Blvd',
    location: '1 New York Ave, Warners Bay, NSW 2282',
    price: '$2,265,500',
    type: 'Rent',
    beds: 2,
    baths: 2,
    sqft: 1620,
    isFavorite: false
  },
  {
    id: 6,
    image: '/Images/hero_bg_1.jpg',
    title: '871 Crenshaw Blvd',
    location: '1 New York Ave, Warners Bay, NSW 2282',
    price: '$2,265,500',
    type: 'Sale',
    beds: 2,
    baths: 2,
    sqft: 1620,
    isFavorite: true
  },
  {
    id: 7,
    image: '/Images/property_3.jpg',
    title: '853 S Lucerne Blvd',
    location: '853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005',
    price: '$2,265,500',
    type: 'Sale',
    beds: 2,
    baths: 2,
    sqft: 5500,
    isFavorite: false
  },
  {
    id: 8,
    image: '/Images/hero_bg_2.jpg',
    title: 'Beachfront Estate',
    location: '789 Ocean Drive, Malibu, CA 90265',
    price: '$5,200,000',
    type: 'Sale',
    beds: 5,
    baths: 4,
    sqft: 12000,
    isFavorite: false
  },

  //RENT PROPERTIES

  {
    id: 9,
    image: '/Images/hero_bg_2.jpg',
    title: '853 S Lucerne Blvd',
    location: '853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005',
    price: '$2,265,500',
    type: 'Rent',
    beds: 2,
    baths: 2,
    sqft: 5500,
    isFavorite: false
  },
  {
    id: 10,
    image: '/Images/property_3.jpg',
    title: '853 S Lucerne Blvd',
    location: '853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005',
    price: '$2,265,500',
    type: 'Rent',
    beds: 2,
    baths: 2,
    sqft: 5500,
    isFavorite: false
  },
  {
    id: 11,
    image: '/Images/property_4.jpg',
    title: 'Modern Apartment (Rent)',
    location: '456 Park Ave, New York, NY 10001',
    price: '$3,800/month',
    type: 'Rent',
    beds: 3,
    baths: 2,
    sqft: 4200,
    isFavorite: false
  },
  {
    id: 12,
    image: '/Images/hero_bg_2.jpg',
    title: 'Luxury Penthouse',
    location: '789 Ocean Drive, Malibu, CA 90265',
    price: '$8,500/month',
    type: 'Rent',
    beds: 4,
    baths: 3,
    sqft: 8500,
    isFavorite: false
  },

  // LEASE PROPERTIES
  {
    id: 13,
    image: '/Images/property_3.jpg',
    title: '853 S Lucerne Blvd',
    location: '853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005',
    price: '$2,265,500',
    type: 'Lease',
    beds: 2,
    baths: 2,
    sqft: 5500,
    isFavorite: false
  },
  {
    id: 14,
    image: '/Images/hero_bg_2.jpg',
    title: 'Modern Office Space',
    location: '123 Business Park, Los Angeles, CA',
    price: '$4,500/month',
    type: 'Lease',
    beds: 0,
    baths: 2,
    sqft: 2500,
    isFavorite: false
  },
  {
    id: 15,
    image: '/Images/property_4.jpg',
    title: 'Retail Storefront',
    location: '456 Main St, New York, NY',
    price: '$3,200/month',
    type: 'Lease',
    beds: 0,
    baths: 1,
    sqft: 1800,
    isFavorite: false
  }
]

// ✅ Filtered data for different pages
export const saleProperties = allProperties.filter(p => p.type === 'Sale')
export const rentProperties = allProperties.filter(p => p.type === 'Rent')
export const leaseProperties = allProperties.filter(p => p.type === 'Lease')
