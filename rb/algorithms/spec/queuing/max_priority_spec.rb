require 'spec_helper'
require_relative '../../lib/queuing/max_priority'

module Queuing
  describe MaxPriority do
    describe '#empty?' do
      context 'when queue is empty' do
        it 'returns true' do
          expect(MaxPriority.new.empty?).to eq(true)
        end
      end

      context 'when queue is not empty' do
        it 'returns false' do
          mp = MaxPriority.new
          mp.insert :value
          expect(mp.empty?).to eq(false)
        end
      end
    end

    describe '#insert and #delete_max' do
      it 'manage queue contents and maintain the correct priority' do
        mp = MaxPriority.new
        items = [7, 2, 6, 3, 5, 4, 1]
        items.each { |item| mp.insert item }
        actual = []
        actual << mp.delete_max until mp.empty?
        expect(actual).to eq(items.sort.reverse)
      end
    end
  end
end
