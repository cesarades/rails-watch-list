puts "Cleaning db"
Movie.delete_all
puts "Movies cleaned"

5.times do
  movie = Movie.new(
    title: Faker::Movie.title,
    overview: Faker::Quote.famous_last_words,
    poster_url: 'https://source.unsplash.com/random'
  )
  print "Adding movie #{movie.title}... "
  print "#{movie.save}\n"
end

puts "Successfuly added #{Movie.count} movies to the database"
