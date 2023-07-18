greetings = [
  "Hello World!",
  "Welcome Universe!",
  "Greetings!",
  "Salutations"
]

greetings.each do |message|
  Greeting.create(message: message)
end
