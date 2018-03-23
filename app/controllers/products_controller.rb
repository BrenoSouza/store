class ProductsController < ApplicationController
    def index 
        @products = ['Celular', 'Casaco', 'Relógio', 'Bicicleta']
    end
end
