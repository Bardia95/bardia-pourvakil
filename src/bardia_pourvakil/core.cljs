(ns bardia-pourvakil.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]))

(def state
  (atom
   {:title "Hi, I'm Bardia Pourvakil"
    :work [{:name "GrantTree"
            :place "London, UK"
            :link "https://www.granttree.co.uk"}
           {:name "GDA Capital"
            :place "Toronto, CA"
            :link "https://gda.captial"}]
    :favourite {:books [{:title "Antifragile"
                         :author "Nassim Taleb"}
                        {:title "Impro"
                         :author "Keith Johnstone"}]}}))

(defn book-lister [books]
  [:ul
   (for [book books]
     ^{:key (:title book)} [:li (str (:title book) " - " (:author book))])])


(defn app []
  (let [grant-tree   ((get-in @state [:work]) 0)
        gda-capital ((get-in @state [:work]) 1)]
    [:div
     [:h1 (:title @state)]
     [:p "I write for grants for "
      [:a {:href (:link grant-tree)} (:name grant-tree)] "."]
     [:p "I do blockchain content marketing for "
      [:a {:href (:link gda-capital)} (:name gda-capital)] "."]
     [:h2 "Favourite books"]
     [book-lister (get-in @state [:favourite :books])]]))

(defn ^:dev/after-load start []
  (rdom/render [app] (js/document.getElementById "app")))

(defn init []
  (js/console.log "init")
  (start))
