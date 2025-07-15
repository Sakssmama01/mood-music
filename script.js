const playlists = {
  happy: [
    {
      title: "Happy – Pharrell",
      image: "https://i.ytimg.com/vi/ZbZSe6N_BXs/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs"
    },
    {
      title: "Can't Stop The Feeling!",
      image: "https://i.ytimg.com/vi/ru0K8uYEZWw/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=ru0K8uYEZWw"
    }
  ],
  sad: [
    {
      title: "Let Her Go – Passenger",
      image: "https://i.ytimg.com/vi/RBumgq5yVrA/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=RBumgq5yVrA"
    },
    {
      title: "Someone Like You – Adele",
      image: "https://i.ytimg.com/vi/hLQl3WQQoQ0/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0"
    }
  ],
  chill: [
    {
      title: "Weightless – Marconi Union",
      image: "https://i.ytimg.com/vi/UfcAVejslrU/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=UfcAVejslrU"
    },
    {
      title: "Lofi Hip-Hop",
      image: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=jfKfPfyJRdk"
    }
  ],
  energetic: [
    {
      title: "Believer – Imagine Dragons",
      image: "https://i.ytimg.com/vi/7wtfhZwyrcc/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=7wtfhZwyrcc"
    },
    {
      title: "Stronger – Kanye West",
      image: "https://i.ytimg.com/vi/PsO6ZnUZI0g/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=PsO6ZnUZI0g"
    }
  ]
};

function showPlaylist(mood) {
  const container = document.getElementById("playlist");
  container.innerHTML = "";

  playlists[mood].forEach(song => {
    const card = document.createElement("div");
    card.className = "song-card";
    card.innerHTML = `
      <img src="${song.image}" alt="${song.title}">
      <h4>${song.title}</h4>
      <a href="${song.link}" target="_blank">Listen</a>
    `;
    container.appendChild(card);
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
