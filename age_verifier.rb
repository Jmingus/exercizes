def age_verifier
  print 'Enter Age'
  @user_age = gets.chomp
  if @user_age.to_i > 21
    print 'Welcome'
  else
    print 'Not Allowed'
  end
end

age_verifier