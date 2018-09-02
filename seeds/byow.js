
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('byow').del()
    .then(function () {
      // Inserts seed entries
      return knex('byow').insert([
        {id: 1, restaurant: 'Arashi', category: 'Japanese', location: 'Courtenay', price: 'In The Middle', phone: '+64 4 801 9818'},
        {id: 2, restaurant: 'Asian Kitchen', category: 'Asian', location: 'Manners', price: 'Cheap and Cheerful', phone: '+64 4 472 8887'},
        {id: 3, restaurant: 'Beach Babylon', category: 'European', location: 'Oriental', price: 'Spendy', phone: '+64 4 801 7717'},
        {id: 4, restaurant: 'Big Elephant Thai', category: 'Thai', location: 'Courtenay', price: 'Spendy', phone: '+64 4 801 8080'},
        {id: 5, restaurant: 'Big Thumb', category: 'Chinese', location: 'Courtenay', price: 'Cheap and Cheerful', phone: '+64 4 384 4878'},
        {id: 6, restaurant: 'Cafe Istanbul', category: 'Turkish', location: 'Cuba', price: 'In The Middle', phone: '+64 4 381 3929'},
        {id: 7, restaurant: 'Cafe Pasha', category: 'Turkish', location: 'Cuba', price: 'Spendy', phone: '+64 4 384 5848'},
        {id: 8, restaurant: 'Cinta', category: 'Malaysian', location: 'Manners', price: 'Cheap and Cheerful', phone: '+64 4 385 8622'},
        {id: 9, restaurant: 'Istana Malaysia', category: 'Malaysian', location: 'Courtenay', price: 'In The Middle', phone: '+64 4 801 7989'},
        {id: 10, restaurant: 'Joe\'s Garage', category: 'European', location: 'Courtenay', price: 'In The Middle', phone: '+64 4 802 5310'},
        {id: 11, restaurant: 'Kazu', category: 'Japanese', location: 'Courtenay', price: 'In The Middle', phone: '+64 4 802 5298'},
        {id: 12, restaurant: 'Kilim', category: 'Turkish', location: 'Petone', price: 'In The Middle', phone: '+64 4 589 7667'},
        {id: 13, restaurant: 'KK Malaysia', category: 'Malaysia', location: 'Cuba', price: 'Cheap and Cheerful', phone: '+64 4 385 6698'},
        {id: 14, restaurant: 'Little Hanoi', category: 'Vietnamese', location: 'Cuba', price: 'Cheap and Cheerful', phone: '+64 4 928 8888'},
        {id: 15, restaurant: 'Little India', category: 'Indian', location: 'Cuba', price: 'In The Middle', phone: '+64 4 384 2535'},
        {id: 16, restaurant: 'Masala', category: 'Indian', location: 'Courtenay', price: 'In The Middle', phone: '+64 4 385 2012'},
        {id: 17, restaurant: 'Miyabi', category: 'Japanese', location: 'Willis', price: 'Cheap and Cheerful', phone: '+64 4 801 9688'},
        {id: 18, restaurant: 'Mughlai MerCury', category: 'Indian', location: 'Willis', price: 'Cheap and Cheerful', phone: '+64 4 382 8554'},
        {id: 19, restaurant: 'Newkor', category: 'Korean', location: 'Willis', price: 'In The Middle', phone: '+64 4 384 2707'},
        {id: 20, restaurant: 'Oriental Kingdom', category: 'Asian', location: 'Cuba', price: 'Cheap and Cheerful', phone: '+64 4 381 3303'},
        {id: 21, restaurant: 'Ozeki', category: 'Japanese', location: 'Mount Vic', price: 'Cheap and Cheerful', phone: '+64 4 897 0818'},
        {id: 22, restaurant: 'Phuthai Esarn', category: 'Thai', location: 'Mount Vic', price: 'In The Middle', phone: '+64 4 801 5006'},
        {id: 23, restaurant: 'Phuthai Lanna', category: 'Thai', location: 'Mount Vic', price: 'In The Middle', phone: '+64 4 801 7771'},
        {id: 24, restaurant: 'Piccolo', category: 'Italian', location: 'Willis', price: 'In The Middle', phone: '+64 4 385 2645'},
        {id: 25, restaurant: 'Planet Spice', category: 'Indian', location: 'Newtown', price: 'Cheap and Cheerful', phone: '+64 4 389 8345'},
        {id: 26, restaurant: 'Ram\'s', category: 'Chinese', location: 'Cuba', price: 'Cheap and Cheerful', phone: '+64 4 803 3628'},
        {id: 27, restaurant: 'Rasa', category: 'Indian', location: 'Cuba', price: 'In The Middle', phone: '+64 4 384 7088'},
        {id: 28, restaurant: 'Red Hill', category: 'Asian', location: 'Manners', price: 'Cheap and Cheerful', phone: '+64 4 385 6888'},
        {id: 29, restaurant: 'Red Mount', category: 'Asian', location: 'Cuba', price: 'Cheap and Cheerful', phone: '+64 4 805 0045'},
        {id: 30, restaurant: 'Satay Malaysia', category: 'Malaysia', location: 'Cuba', price: 'Cheap and Cheerful', phone: '+64 4 385 0679'},
        {id: 31, restaurant: 'Tequila Joe\'s', category: 'Mexican', location: 'Mount Vic', price: 'Spendy', phone: '+64 4 802 5637'},
        {id: 32, restaurant: 'Thai Chef', category: 'Thai', location: 'Courtenay', price: 'Spendy', phone: '+64 4 385 4535'},
        {id: 33, restaurant: 'Thai Tara', category: 'Thai', location: 'Cuba', price: 'Cheap and Cheerful', phone: '+64 4 384 4092'},
        {id: 34, restaurant: 'The Lotus', category: 'Vietnamese', location: 'Mount Vic', price: 'In The Middle', phone: '+64 4 803 3386'},
        {id: 35, restaurant: 'Top Kitchen', category: 'Asian', location: 'Cuba', price: 'Cheap and Cheerful', phone: '+64 4 801 8757'},
        {id: 36, restaurant: 'Young Shing', category: 'Asian', location: 'Willis', price: 'Cheap and Cheerful', phone: '+64 4 282 1709'},
        {id: 37, restaurant: 'Roti Chenai', category: 'Malaysian', location: 'Manners', price: 'In The Middle', phone: '+64 4 382 9807'},
        {id: 38, restaurant: 'Good Morning Vietnam', category: 'Vietnamese', location: 'Courtenay', price: 'In The Middle', phone: '+64 4 801 6771'},
        {id: 39, restaurant: 'Tulsi', category: 'Indian', location: 'Cuba', price: 'In The Middle', phone: '+64 4 802 4144'},
        {id: 40, restaurant: 'Genghis Khan', category: 'Mongolian', location: 'Mount Vic', price: 'In The Middle', phone: '+64 4 384 3592'},
      ]);
    });
};
