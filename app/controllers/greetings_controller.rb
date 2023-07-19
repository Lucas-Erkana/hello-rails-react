class GreetingsController < ApplicationController
  def random_greeting
    @random_greeting = Greeting.all.sample
    render json: { greeting: @random_greeting.message }
  end
end
