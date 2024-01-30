const communityState = {
  posts: [
    {
      id: 0,
      photoUrl:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png',
      title: 'Yummy breakfast on weekend',
      author: 'Paul Graham',
      authorImg:
        'https://scontent.fotp1-1.fna.fbcdn.net/v/t1.0-9/18767682_228245157678583_5896868609194594443_n.jpg?_nc_cat=111&_nc_oc=AQmTYdcICmmyP2G2qkQnzmZ04LsHWs-zKcWHU4ZpAjdxVdPP6wwwmpSVXm2VzHlSOMg&_nc_ht=scontent.fotp1-1.fna&oh=57f613f1c5e978ef96cdc2ccb94a8a06&oe=5DAA9833',
      time: '6 minutes',
      likes: 45,
      liked: false,
      comments: [
        {
          id: 0,
          text: 'Looking really nice',
          authorName: 'Alex Altman',
          authorPhoto:
            'https://scontent.fotp1-1.fna.fbcdn.net/v/t1.0-9/18951400_1363140973777266_779043989173216185_n.jpg?_nc_cat=105&_nc_oc=AQkIf8QBrQMGH-54JsE4nsL6C0ZvFxiWylkKBqx_vxt20fl7F8JQyh9yBDLy5K32DWw&_nc_ht=scontent.fotp1-1.fna&oh=be6f00306eec022b37000190fa810dea&oe=5DE5BFFE',
          time: '10 minutes'
        }
      ]
    },
    {
      id: 1,
      photoUrl:
        'https://scontent.fotp1-1.fna.fbcdn.net/v/t1.0-9/59674324_2261721850570095_6556096281163333632_n.jpg?_nc_cat=107&_nc_oc=AQmnkVMLT3VaOFyUEkZ6er4A6OJWInCfTr--xYaeUFyHLPj6sNvBDxHIK8KS5eE5YBA&_nc_ht=scontent.fotp1-1.fna&oh=a543f0b39c4f06ff6c3652215282ff4a&oe=5DABFE53',
      title: 'Leg Day, best day',
      author: 'Ben Horrowitz',
      authorImg:
        'https://scontent.fotp1-1.fna.fbcdn.net/v/t1.0-9/59674324_2261721850570095_6556096281163333632_n.jpg?_nc_cat=107&_nc_oc=AQmnkVMLT3VaOFyUEkZ6er4A6OJWInCfTr--xYaeUFyHLPj6sNvBDxHIK8KS5eE5YBA&_nc_ht=scontent.fotp1-1.fna&oh=a543f0b39c4f06ff6c3652215282ff4a&oe=5DABFE53',
      time: '6 minutes',
      likes: 45,
      liked: false,
      comments: [
        {
          id: 0,
          text: 'Nice legs mate, keep it up!',
          authorName: 'Michael Bond',
          authorPhoto:
            'https://scontent.fotp1-2.fna.fbcdn.net/v/t1.0-9/10308119_630555353700370_8773598920250295974_n.jpg?_nc_cat=106&_nc_oc=AQnpsHV8-F3I6rWxlCQKUHRYWkPP69U1IzyLGC_IEkvU347Tgnfmi9MaVYvzXx4m65w&_nc_ht=scontent.fotp1-2.fna&oh=bfd9e26a0c9c593d54e991dc9bee31a4&oe=5DD72567',
          time: '12 minutes'
        }
      ]
    }
  ]
};

export const communityReducer = (state = communityState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'ADD_POST': {
      newState.posts.push(action.post);
      break;
    }
    case 'ADD_LIKE': {
      newState.posts.map(data => {
        if (data.id == action.id) {
          data.liked = !data.liked;
          if (data.liked) {
            data.likes += 1;
          } else {
            data.likes -= 1;
          }
        }
      });
      break;
    }
    case 'ADD_COMMENT': {
      newState.posts.map(data => {
        if (data.id == action.postId) {
          data.comments.push(action.comment);
        }
      });
      break;
    }
    default:
      return newState;
  }
  return newState;
};
