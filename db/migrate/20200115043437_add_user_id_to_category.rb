# frozen_string_literal: true

class AddUserIdToCategory < ActiveRecord::Migration[5.0]
  def change
    add_reference :categories, :user, foreign_key: true
  end
end
