require_relative 'sorting_helpers'

module Sorting
  class Shell
    include SortingHelpers

    def sort!(collection)
      n = collection.length
      h = 1
      h = (3 * h) + 1 while h < (n / 3)

      while h >= 1
        h.upto(n - 1).each do |i|
          i.step(by: -h, to: h) do |j|
            break if collection[j] > collection[j - h]
            swap!(collection, j, (j - h))
          end
        end

        h /= 3
      end
    end
  end
end
