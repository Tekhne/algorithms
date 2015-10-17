require 'spec_helper'
require_relative '../../lib/sorting/merge'

module Sorting
  describe Merge do
    subject(:merge) { Merge.new }

    describe '#merge!' do
      it 'merges the given collection' do
        collection = [0, 5, 6, 7, 8, 1, 2, 3, 4, 9]
        merge.merge!(collection, 1, 4, 8)
        expect(collection).to eq(collection.sort)
      end
    end

    describe '#sort!' do
      it 'sorts the given collection' do
        collection = [9, 2, 8, 3, 7, 4, 5, 6, 1, 0]
        merge.sort!(collection)
        expect(collection).to eq(collection.sort)
      end
    end
  end
end
