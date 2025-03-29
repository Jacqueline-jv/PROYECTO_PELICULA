.movie-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.movie-card {
    background: #222;
    color: #fff;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    transition: transform 0.3s ease-in-out;
}

.movie-card img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
}

.movie-card:hover {
    transform: scale(1.05);
}

