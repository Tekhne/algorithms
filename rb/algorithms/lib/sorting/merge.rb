module Sorting
  class Merge
    def merge!(collection, lo, mid, hi)
      left, right = lo, (mid + 1)
      aux = collection.dup

      (lo..hi).each do |k|
        if left > mid                # left exhausted
          collection[k] = aux[right]
          right = right.next
        elsif right > hi             # right exhausted
          collection[k] = aux[left]
          left = left.next
        elsif aux[right] < aux[left]
          collection[k] = aux[right]
          right = right.next
        else
          collection[k] = aux[left]
          left = left.next
        end
      end
    end

    def sort!(collection)
      do_sort!(collection, 0, (collection.length - 1))
    end

    private

    def do_sort!(collection, lo, hi)
      return if hi <= lo
      mid = Integer(lo + ((hi - lo) / 2))
      do_sort!(collection, lo, mid)
      do_sort!(collection, (mid + 1), hi)
      merge!(collection, lo, mid, hi)
    end
  end
end
