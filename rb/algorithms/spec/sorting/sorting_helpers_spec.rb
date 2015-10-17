require 'spec_helper'
require_relative '../../lib/sorting/sorting_helpers'

module Sorting
  describe SortingHelpers do
    subject(:sorting_helpers) { Class.new { include SortingHelpers }.new }

    describe '#swap!' do
      it 'swaps two elements of a collection' do
        collection = [1, 2]
        sorting_helpers.swap!(collection, 0, 1)
        expect(collection).to eq([2, 1])
      end
    end
  end
end
