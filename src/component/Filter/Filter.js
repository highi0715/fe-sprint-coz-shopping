import "./filter.css";





export default function Filter() {
    const FilterTypes = {
        ALL: { name: '전체', imageSrc: '/images/all.png', alt: 'all' },
        PRODUCT: { name: '상품', imageSrc: '/images/product.png', alt: 'product' },
        CATEGORY: { name: '카테고리', imageSrc: '/images/category.png', alt: 'category' },
        GIFT: { name: '기획전', imageSrc: '/images/gift.png', alt: 'gift' },
        BRAND: { name: '브랜드', imageSrc: '/images/brand.png', alt: 'brand' },
      };
      const filterItems = Object.values(FilterTypes);
    return (
        <ul>
      {filterItems.map((filterItem) => (
        <li key={filterItem.alt}>
          <img src={filterItem.imageSrc} alt={filterItem.alt} />
          <span>{filterItem.name}</span>
        </li>
      ))}
    </ul>
  );
}