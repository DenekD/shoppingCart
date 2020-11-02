import React from 'react';
import data from './data';

export const CategoriesContext = React.createContext({
  categories: [],
  leftDrawer: {
    isOpen: false,
    toggleLeftDrawer: () => {},
  },
});

const ProductsContextProvider = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleToggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories: data.categories,
        leftDrawer: {
          isOpen: isDrawerOpen,
          toggleLeftDrawer: handleToggleDrawer,
        },
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default ProductsContextProvider;
