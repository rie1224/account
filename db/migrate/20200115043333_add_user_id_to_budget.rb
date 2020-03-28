# frozen_string_literal: true

class AddUserIdToBudget < ActiveRecord::Migration[5.0]
  def change
    add_reference :budgets, :user, foreign_key: true
  end
end
