require_relative 'sorting_helpers'

module Sorting
  class Quick
    include SortingHelpers

    def sort!(collection)
      collection.shuffle!
      do_sort!(collection, 0, (collection.length - 1))
    end

    private

    def do_sort!(collection, lo, hi)
      return if hi <= lo
      j = partition(collection, lo, hi)
      do_sort!(collection, lo, (j - 1))
      do_sort!(collection, (j + 1), hi)
    end

    def partition(collection, lo, hi)
      i, j = lo, (hi + 1)
      v = collection[lo]

      loop do
        i += 1

        while collection[i] < v
          break if i == hi
          i = i.succ
        end

        j -= 1

        while v < collection[j]
          break if j == lo
          j -= 1
        end

        break if i >= j

        swap!(collection, i, j)
      end

      swap!(collection, lo, j)
      j
    end
  end
end
