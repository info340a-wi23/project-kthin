import React from 'react';
import { Brand } from './Brand.js';

const categoryData = [
    {
      category: 'Casual, Everyday Wear',
    },
    {
      category: 'Night Out',
    },
    {
      category: 'Business Casual Office Wear',
    },
    {
      category: 'Athleisure and Athletic Clothing',
    },
    {
      category: 'Formal Wear',
    },
    {
      category: 'Intimates',
    },
    {
      category: 'Beach and Vacation Wear',
    },
    {
      category: 'Accessories',
    }
];

export function Category({ category, brands }) {
    return (
        <div>
        <h2>{category}</h2>
        <ul>
            {brands.filter((brand) => brand.category === category)
            .map((brand) => (
                <Brand key={brand.category} brand={brand} />
            ))}
        </ul>
        </div>
    );
}; 
