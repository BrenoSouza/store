class ProductController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @products = Product.all
        render json: @products
    end
  
    def create
        product = Product.new(product_params)
        if product.save
            render json: product
        else 
            render json: { errors: product.errors.full_messages }, status: :unprocessable_entity
        end
    end
  
    def show
        render json: @product
    end
  
    def update
        product = Product.find(params[:id])
        if product.update_attributes(product_params)
            render json: product
        else
            render json: { errors: product.errors.full_messages }, status: :unprocessable_entity
        end
    end
  
    def destroy
        product = Product.destroy(params[:id])
        render json: product
    end
  
    private
  
    def product_params
        params.require(:product).permit(:name, :description, :price, :url, :category, :likes, :dislikes)
    end
end
