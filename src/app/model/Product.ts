export class Product {
  id: string = '';
  Image: string = '';
  Image1: string = '';
  Content: string = '';
  Name: string = '';
  Keywords: string = '';
  Category: string = '';
  Colors: string = '';
  Price: string = '';
  Promo_apply: string = '';
  Reviews: Reviews = new Reviews();
  Description_title: string = '';
  Description_content: string = '';
  Details: string = '';
  Care: Care = new Care();
  Color_detail: ColorDetail[] = [];
}

class Reviews {
  votes: number = 0;
  rating: number = 0;
}

class Care {
  title: string = '';
  content: string[] = [];
}

class ColorDetail {
  color: string = '';
  image_url: string = '';
}
