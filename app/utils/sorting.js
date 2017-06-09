export const handleSort = type => {
  switch(type) {
    case 'likes':
      return sortByLikes;
    default:
      return sortByTime;
  }
};

const sortByTime = (a, b) => a.lastEditedAt < b.lastEditedAt;

const sortByLikes = (a, b) => a.likes.length < b.likes.length;
