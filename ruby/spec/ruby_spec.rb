describe 'App' do
  it 'executes successfully without errors' do
    expect{App.run}.to_not raise_error
  end
end
