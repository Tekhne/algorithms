require 'spec_helper'
require_relative '../../lib/sorting/shell'

module Sorting
  describe Shell do
    describe '#sort!' do
      subject(:shell) { Shell.new }

      it 'sorts the given collection' do
        collection = [9, 2, 8, 3, 7, 4, 5, 6, 1, 0]
        shell.sort!(collection)
        expect(collection).to eq(collection.sort)
      end
    end
  end
end
