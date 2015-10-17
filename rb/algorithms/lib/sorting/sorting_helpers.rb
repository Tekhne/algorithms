module Sorting
  module SortingHelpers
    def swap!(collection, i, j)
      collection[i], collection[j] = collection[j], collection[i]
    end
  end
end
