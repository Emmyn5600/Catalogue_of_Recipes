import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import renderer from 'react-test-renderer';
import RecipleDetails from '../containers/RecipleDetails';
import createStore from '../store/createStore';

const store = createStore();

const recipe = {
  idMeal: '52977',
  strMeal: 'Corba',
  strDrinkAlternate: null,
  strCategory: 'Side',
  strArea: 'Turkish',
  strInstructions:
    'Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside. Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later In a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes. Add the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells. Immediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil. After it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked. After the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary. Serve with crushed-up crackers, torn up bread, or something else to add some extra thickness. You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness. Makes great leftovers, stays good in the fridge for about a week.',
  strMealThumb:
    'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
  strTags: 'Soup',
  strYoutube: 'https://www.youtube.com/watch?v=VVnZd8A84z4',
  strIngredient1: 'Lentils',
  strIngredient2: 'Onion',
  strIngredient3: 'Carrots',
  strIngredient4: 'Tomato Puree',
  strIngredient5: 'Cumin',
  strIngredient6: 'Paprika',
  strIngredient7: 'Mint',
  strIngredient8: 'Thyme',
  strIngredient9: 'Black Pepper',
  strIngredient10: 'Red Pepper Flakes',
  strIngredient11: 'Vegetable Stock',
  strIngredient12: 'Water',
  strIngredient13: 'Sea Salt',
};

describe('Recipe Details', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <RecipleDetails recipe={recipe} />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
