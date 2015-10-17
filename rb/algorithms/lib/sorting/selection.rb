require_relative 'sorting_helpers'

module Sorting
  class Selection
    include SortingHelpers

    def sort!(collection)
      n = collection.length

      0.upto(n - 1) do |i|
        minimum = i

        (i + 1).upto(n - 1) do |j|
          minimum = j if collection[j] < collection[minimum]
        end

        swap!(collection, i, minimum)
      end
    end
  end
end
