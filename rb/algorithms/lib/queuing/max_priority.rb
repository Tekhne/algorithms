module Queuing
  class MaxPriority
    attr_accessor :size

    def initialize
      # This Array is a binary tree. The first index is at 1 (i.e. no value
      # is used at 0). Parent nodes are located at index k. Left child nodes
      # are located at k * 2, and right child nodes at k * 2 + 1.
      @queue = [nil]
    end

    def empty?
      queue.size < 2
    end

    def insert(v)
      queue << v
      swim(last_k)
    end

    def delete_max
      max = queue[first_k]
      swap(first_k, last_k)
      queue.pop
      sink(first_k)
      max
    end

    private

    attr_accessor :queue

    def swap(i, j)
      queue[i], queue[j] = queue[j], queue[i]
    end

    def swim(k)
      while (k > first_k) && (queue[parent_of(k)] < queue[k])
        swap(parent_of(k), k)
        k = parent_of(k)
      end
    end

    def sink(k)
      while first_child_of(k) <= last_k
        j = first_child_of(k)

        if (j < last_k)
          if (queue[j] < queue[last_child_of(k)])
            j = j.succ
          end
        end

        break if k > j
        swap(k, j)
        k = j
      end
    end

    def first_k
      1
    end

    def last_k
      queue.size - 1
    end

    def parent_of(k)
      k / 2
    end

    def first_child_of(k)
      k * 2
    end

    def last_child_of(k)
      (k * 2) + 1
    end
  end
end
