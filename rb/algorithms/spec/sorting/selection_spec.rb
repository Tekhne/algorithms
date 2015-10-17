require 'spec_helper'
require_relative '../../lib/sorting/selection'

module Sorting
  describe Selection do
    describe '#sort!' do
      subject(:selection) { Selection.new }

      it 'sorts the given collection' do
        collection = [9, 2, 8, 3, 7, 4, 5, 6, 1, 0]
        selection.sort!(collection)
        expect(collection).to eq(collection.sort)
      end
    end
  end
end
