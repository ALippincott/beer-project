var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
			$scope.movies = [
				{
					"title": "Minions",
					"overview": "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
					"release_date": "2015-06-17",
					"poster": "https://image.tmdb.org/t/p/w640/q0R4crx2SehcEEQEkYObktdeFy.jpg"
    },
				{
					"title": "Beauty and the Beast",
					"overview": "A live-action adaptation of Disney's version of the classic 'Beauty and the Beast' tale of a cursed prince and a beautiful young woman who helps him break the spell.",
					"release_date": "2017-03-16",
					"poster": "https://image.tmdb.org/t/p/w640/tWqifoYuwLETmmasnGHO7xBjEtt.jpg"
    },
				{
					"title": "Annabelle: Creation",
					"overview": "Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
					"release_date": "2017-08-09",
					"poster": "https://image.tmdb.org/t/p/w640/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg"
    },
				{
					"title": "Spider-Man: Homecoming",
					"overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
					"release_date": "2017-07-05",
					"poster": "https://image.tmdb.org/t/p/w640/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg"
    },
				{
					"title": "Guardians of the Galaxy Vol. 2",
					"overview": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
					"release_date": "2017-04-19",
					"poster": "https://image.tmdb.org/t/p/w640/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg"
    },
				{
					"title": "Despicable Me 3",
					"overview": "Gru and his wife Lucy must stop former '80s child star Balthazar Bratt from achieving world domination.",
					"release_date": "2017-06-15",
					"poster": "https://image.tmdb.org/t/p/w640/puV2PFq42VQPItaygizgag8jrXa.jpg"
    }];
			});