-- Seed Master Ingredients for Bangladesh Food Intelligence
INSERT INTO public.ingredients (name, name_bn, category, default_unit, average_shelf_life_days) VALUES
-- Grains & Staples
('Miniket Rice', 'মিনিকেট চাল', 'grains_staples', 'kg', 180),
('Nazirshail Rice', 'নাজিরশাইল চাল', 'grains_staples', 'kg', 180),
('Polao Rice (Chinigura)', 'চিনিগুঁড়া পোলাও চাল', 'grains_staples', 'kg', 180),
('Masoor Dal', 'মসুর ডাল', 'grains_staples', 'kg', 120),
('Moong Dal', 'মুগ ডাল', 'grains_staples', 'kg', 120),
('Cholar Dal (Gram)', 'ছোলার ডাল', 'grains_staples', 'kg', 120),
('Atta (Whole Wheat)', 'আটা', 'grains_staples', 'kg', 60),
('Maida (Flour)', 'ময়দা', 'grains_staples', 'kg', 60),

-- Vegetables
('Red Onion', 'দেশি পেঁয়াজ', 'vegetables', 'kg', 21),
('Potato', 'গোল আলু', 'vegetables', 'kg', 30),
('Tomato', 'টমেটো', 'vegetables', 'kg', 7),
('Green Chili', 'কাঁচামরিচ', 'vegetables', 'g', 10),
('Garlic', 'দেশি রসুন', 'vegetables', 'g', 45),
('Ginger', 'আদা', 'vegetables', 'g', 25),
('Coriander Leaves', 'ধনেপাতা', 'vegetables', 'bunch', 4),
('Cauliflower', 'ফুলকপি', 'vegetables', 'piece', 7),
('Cabbage', 'বাঁধাকপি', 'vegetables', 'piece', 14),
('Eggplant (Brinjal)', 'বেগুন', 'vegetables', 'kg', 6),
('Bottle Gourd (Lau)', 'লাউ', 'vegetables', 'piece', 10),
('Pointed Gourd (Potol)', 'পটল', 'vegetables', 'kg', 7),

-- Dairy & Poultry
('Farm Eggs', 'ফার্মের লাল ডিম', 'dairy_eggs', 'piece', 21),
('Deshi Eggs', 'দেশি মুরগির ডিম', 'dairy_eggs', 'piece', 21),
('Broiler Chicken', 'ব্রয়লার মুরগি', 'meat_poultry', 'kg', 3),
('Sonali Chicken', 'সোনালি মুরগি', 'meat_poultry', 'kg', 3),
('Beef', 'গরুর মাংস', 'meat_poultry', 'kg', 3),
('Mutton', 'খাসির মাংস', 'meat_poultry', 'kg', 3),
('Fresh Liquid Milk', 'তরল গরুর দুধ', 'dairy_eggs', 'L', 3),

-- Fish & Seafood
('Rui Fish', 'রুই মাছ', 'fish_seafood', 'kg', 3),
('Katla Fish', 'কাতলা মাছ', 'fish_seafood', 'kg', 3),
('Ilish (Hilsa)', 'ইলিশ মাছ', 'fish_seafood', 'piece', 4),
('Pangash Fish', 'পাঙ্গাশ মাছ', 'fish_seafood', 'kg', 3),
('Telapia Fish', 'তেলাপিয়া মাছ', 'fish_seafood', 'kg', 3),
('Shrimp / Chingri', 'চিংড়ি মাছ', 'fish_seafood', 'kg', 3),

-- Oils & Spices
('Mustard Oil', 'খাঁটি সরিষার তেল', 'oils_fats', 'ml', 180),
('Soybean Oil', 'সয়াবিন তেল', 'oils_fats', 'L', 180),
('Ghee', 'ঘি', 'dairy_eggs', 'g', 180),
('Turmeric Powder', 'হলুদ গুঁড়া', 'spices_seasoning', 'g', 180),
('Chili Powder', 'মরিচ গুঁড়া', 'spices_seasoning', 'g', 180),
('Cumin (Jeera)', 'জিরা', 'spices_seasoning', 'g', 180),
('Coriander Powder', 'ধনিয়া গুঁড়া', 'spices_seasoning', 'g', 180),
('Garam Masala', 'গরম মসলা', 'spices_seasoning', 'g', 180),
('Table Salt', 'লবণ', 'spices_seasoning', 'kg', 365)
ON CONFLICT DO NOTHING;
