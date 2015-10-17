require 'spec_helper'
require_relative '../../lib/sorting/insertion'

module Sorting
  describe Insertion do
    describe '#sort!' do
      subject(:insertion) { Insertion.new }

      it 'sorts the given collection' do
        collection = [9, 2, 8, 3, 7, 4, 5, 6, 1, 0]
        insertion.sort!(collection)
        expect(collection).to eq(collection.sort)
      end
    end
  end
end
