require 'spec_helper'
require_relative '../../lib/sorting/quick'

module Sorting
  describe Quick do
    subject(:quick) { Quick.new }

    describe '#sort!' do
      it 'sorts the given collection' do
        collection = [9, 2, 8, 3, 7, 4, 5, 6, 1, 0]
        quick.sort!(collection)
        expect(collection).to eq(collection.sort)
      end
    end
  end
end
