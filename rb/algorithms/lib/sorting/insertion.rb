require_relative 'sorting_helpers'

module Sorting
  class Insertion
    include SortingHelpers

    def sort!(collection)
      1.upto(collection.length - 1) do |i|
        i.downto(1) do |j|
          break if collection[j] > collection[j - 1]
          swap!(collection, j, (j - 1))
        end
      end
    end
  end
end
