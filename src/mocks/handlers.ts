import { rest } from 'msw';

import { DogBreed } from '../app/shared/models/dog-breed';
import { environment } from '../environments/environment';

export const handlers = [
  rest.get('/api/dog-breeds', (req, res, ctx) => {
    return res(ctx.json([{
      avatarUrl: `${environment.baseUrl}/assets/img/maltese-avatar.jpg`,
      description: 'A gentle and fearless dog breed, the Maltese greets everyone as a friend. Their glamorous white coat gives them a look of haughty nobility, but looks can be deceiving.',
      imageUrl: `${environment.baseUrl}/assets/img/maltese.jpg`,
      name: 'Maltese'
    }, {
      avatarUrl: `${environment.baseUrl}/assets/img/yorkshire-terrier-avatar.jpg`,
      description: 'A gentle and fearless dog breed, the Maltese greets everyone as a friend. Their glamorous white coat gives them a look of haughty nobility, but looks can be deceiving.',
      imageUrl: `${environment.baseUrl}/assets/img/yorkshire-terrier.jpg`,
      name: 'Yorkshire Terrier'
    }, {
      avatarUrl: `${environment.baseUrl}/assets/img/german-shepherd-avatar.jpg`,
      description: 'The German Shepherd Dog is one of America’s most popular dog breeds — for good reasons. They’re intelligent and capable working dogs. Their devotion and courage are unmatched. And they’re amazingly versatile.',
      imageUrl: `${environment.baseUrl}/assets/img/german-shepherd.jpg`,
      name: 'German Shepherd'
    }, {
      avatarUrl: `${environment.baseUrl}/assets/img/golden-retriever-avatar.jpg`,
      description: 'The Golden Retriever is one of the most popular dog breeds in the United States. The breed’s friendly, tolerant attitude makes them great family pets, and their intelligence makes them highly capable working dogs.',
      imageUrl: `${environment.baseUrl}/assets/img/golden-retriever.jpg`,
      name: 'Golden Retriever'
    }, {
      avatarUrl: `${environment.baseUrl}/assets/img/pomeranian-avatar.jpg`,
      description: 'A gentle and fearless dog breed, the Maltese greets everyone as a friend. Their glamorous white coat gives them a look of haughty nobility, but looks can be deceiving.',
      imageUrl: `${environment.baseUrl}/assets/img/pomeranian.jpg`,
      name: 'Pomeranian'
    }] as DogBreed[]));
  })
];
