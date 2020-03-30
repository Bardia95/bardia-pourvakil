(ns bardia-pourvakil.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]))

(def state
  (atom
   {:title "Hi, I'm Bardia Pourvakil"
    :work [{:name "GrantTree"
            :place "London, UK"
            }
           {:name "GDA Capital"
            :place "Toronto, CA"}]
    :favourite {:books [{:title "Antifragile"
                         :author "Nassim Taleb"}
                        {:title "Impro"
                         :author "Keith Johnstone"}]}}))


(defn app []
  [:div
   [:h1 (:title @state)]
   [:h2 "Favourite books"]
   [:h2 "Favourite movies"]])

(defn ^:dev/after-load start []
  (rdom/render [app] (js/document.getElementById "app")))

(defn init []
  (js/console.log "init")
  (start))

