import sanityClient from '@sanity/client';
import { ImageUrlBuilder } from '@sanity/image-url';


const client = sanityClient({
  projectId: 'ybubi3lm',
  dataset: 'production',
  apiVersion: '2023-01',
  useCdn: true,
  token: ''
})