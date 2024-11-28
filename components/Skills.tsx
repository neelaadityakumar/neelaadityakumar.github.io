import * as adobeXd from "/public/svg/skills/adobe-xd.svg";
import adobeaudition from "/public/svg/skills/adobeaudition.svg";
import afterEffects from "/public/svg/skills/after-effects.svg";
import angular from "/public/svg/skills/angular.svg";
import aws from "/public/svg/skills/aws.svg";
import azure from "/public/svg/skills/azure.svg";
import blender from "/public/svg/skills/blender.svg";
import bootstrap from "/public/svg/skills/bootstrap.svg";
import bulma from "/public/svg/skills/bulma.svg";
import c from "/public/svg/skills/c.svg";
import canva from "/public/svg/skills/canva.svg";
import capacitorjs from "/public/svg/skills/capacitorjs.svg";
import coffeescript from "/public/svg/skills/coffeescript.svg";
import cplusplus from "/public/svg/skills/cplusplus.svg";
import csharp from "/public/svg/skills/csharp.svg";
import css from "/public/svg/skills/css.svg";
import dart from "/public/svg/skills/dart.svg";
import deno from "/public/svg/skills/deno.svg";
import django from "/public/svg/skills/django.svg";
import docker from "/public/svg/skills/docker.svg";
import fastify from "/public/svg/skills/fastify.svg";
import figma from "/public/svg/skills/figma.svg";
import firebase from "/public/svg/skills/firebase.svg";
import flutter from "/public/svg/skills/flutter.svg";
import gcp from "/public/svg/skills/gcp.svg";
import gimp from "/public/svg/skills/gimp.svg";
import git from "/public/svg/skills/git.svg";
import go from "/public/svg/skills/go.svg";
import graphql from "/public/svg/skills/graphql.svg";
import haxe from "/public/svg/skills/haxe.svg";
import html from "/public/svg/skills/html.svg";
import illustrator from "/public/svg/skills/illustrator.svg";
import ionic from "/public/svg/skills/ionic.svg";
import java from "/public/svg/skills/java.svg";
import javascript from "/public/svg/skills/javascript.svg";
import julia from "/public/svg/skills/julia.svg";
import kotlin from "/public/svg/skills/kotlin.svg";
import lightroom from "/public/svg/skills/lightroom.svg";
import markdown from "/public/svg/skills/markdown.svg";
import materialui from "/public/svg/skills/materialui.svg";
import matlab from "/public/svg/skills/matlab.svg";
import memsql from "/public/svg/skills/memsql.svg";
import microsoftoffice from "/public/svg/skills/microsoftoffice.svg";
import mongoDB from "/public/svg/skills/mongoDB.svg";
import mysql from "/public/svg/skills/mysql.svg";
import nextJS from "/public/svg/skills/nextJS.svg";
import nginx from "/public/svg/skills/nginx.svg";
import numpy from "/public/svg/skills/numpy.svg";
import nuxtJS from "/public/svg/skills/nuxtJS.svg";
import opencv from "/public/svg/skills/opencv.svg";
import photoshop from "/public/svg/skills/photoshop.svg";
import php from "/public/svg/skills/php.svg";
import picsart from "/public/svg/skills/picsart.svg";
import postgresql from "/public/svg/skills/postgresql.svg";
import premierepro from "/public/svg/skills/premierepro.svg";
import python from "/public/svg/skills/python.svg";
import pytorch from "/public/svg/skills/pytorch.svg";
import react from "/public/svg/skills/react.svg";
import ruby from "/public/svg/skills/ruby.svg";
import selenium from "/public/svg/skills/selenium.svg";
import sketch from "/public/svg/skills/sketch.svg";
import strapi from "/public/svg/skills/strapi.svg";
import svelte from "/public/svg/skills/svelte.svg";
import swift from "/public/svg/skills/swift.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import tensorflow from "/public/svg/skills/tensorflow.svg";
import typescript from "/public/svg/skills/typescript.svg";
import unity from "/public/svg/skills/unity.svg";
import vitejs from "/public/svg/skills/vitejs.svg";
import vue from "/public/svg/skills/vue.svg";
import vuetifyjs from "/public/svg/skills/vuetifyjs.svg";
import webix from "/public/svg/skills/webix.svg";
import wolframalpha from "/public/svg/skills/wolframalpha.svg";
import wordpress from "/public/svg/skills/wordpress.svg";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "docker":
      return docker;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nuxt js":
      return nuxtJS;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "tensorflow":
      return tensorflow;
    case "webix":
      return webix;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    default:
      break;
  }
};

const skillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next JS",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "AWS",
  "Figma",
  "Firebase",
  "MaterialUI",
  "Nginx",
];
function Skills() {
  return (
    <div id="skills" className="relative z-50 mt-20 max-w-[85%] mx-auto">
      <div className="w-full my-6">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#153040] shadow-none shadow-gray-50 group-hover:border-[#64ffda] transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#153040] via-[#64ffda] to-[#153040]" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill}</p>
                </div>{" "}
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#153040] via-[#64ffda] to-[#153040]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
